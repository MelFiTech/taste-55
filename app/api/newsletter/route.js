export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email } = body

    // Validate inputs
    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: 'Name and email are required' }), 
        { status: 400 }
      )
    }

    // Send to Formspark
    const response = await fetch('https://submit-form.com/KVpd50RFu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to submit to Formspark')
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Successfully subscribed to newsletter'
      }), 
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter API Error:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process request',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      }), 
      { status: 500 }
    )
  }
}