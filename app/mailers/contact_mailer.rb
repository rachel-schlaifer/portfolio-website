class ContactMailer < ActionMailer::Base
  default to: 'rschlaifer@proton.me'
  
  def contact_email(name, email, subject, message)
    @name = name
    @email = email
    @message = message
    
    mail(
      from: ENV['EMAIL_USERNAME'],
      to: 'rschlaifer@proton.me',
      subject: "Portfolio Contact: #{subject}"
    )
  end
end
