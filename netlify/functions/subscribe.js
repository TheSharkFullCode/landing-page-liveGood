exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  let nombre, email
  try {
    const body = JSON.parse(event.body)
    nombre = body.nombre?.trim()
    email = body.email?.trim()
  } catch {
    return { statusCode: 400, body: JSON.stringify({ message: 'Invalid JSON' }) }
  }

  if (!nombre || !email) {
    return { statusCode: 400, body: JSON.stringify({ message: 'nombre y email requeridos' }) }
  }

  const apiKey = process.env.VITE_BREVO_API_KEY
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ message: 'API key no configurada' }) }
  }

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      email,
      attributes: { FIRSTNAME: nombre },
      listIds: [3],
      updateEnabled: true,
      status: 'active',
    }),
  })

  if (!res.ok) {
    const err = await res.json()
    return {
      statusCode: res.status,
      body: JSON.stringify({ message: err?.message || 'Brevo error' }),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true }),
  }
}
