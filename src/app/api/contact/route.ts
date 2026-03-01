import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  service_type: string
  budget?: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactFormData

    // Validation
    if (!body.name || !body.email || !body.service_type || !body.message) {
      return NextResponse.json(
        { error: 'Vul alle verplichte velden in.' },
        { status: 400 }
      )
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Voer een geldig e-mailadres in.' },
        { status: 400 }
      )
    }

    // In production, this would save to a database (Prisma/Supabase)
    // and optionally send an email notification.
    // For now, we log and return success.
    console.log('New contact submission:', {
      name: body.name,
      email: body.email,
      phone: body.phone || null,
      service_type: body.service_type,
      budget: body.budget || null,
      message: body.message,
      status: 'new',
      created_at: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: 'Uw bericht is verzonden. Wij nemen binnen 24-48 uur contact op.',
    })
  } catch (error) {
    console.error('Contact route error:', error)
    return NextResponse.json(
      { error: 'Er is een interne fout opgetreden. Probeer het later opnieuw.' },
      { status: 500 }
    )
  }
}
