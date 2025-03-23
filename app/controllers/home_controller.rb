class HomeController < ApplicationController
  def index

  end

  def contact
    # Renders the contact form
  end

  def send_message
    # Process the form submission and send email
    @name = params[:name]
    @email = params[:email]
    @message = params[:message]
    @subject = params[:subject]
    
    # Send the email
    ContactMailer.contact_email(@name, @email, @subject, @message).deliver_now
    
    # Redirect with a flash message
    flash[:success] = "Thank you for your message! I'll get back to you soon."
    redirect_to contact_path
  rescue => e
    flash[:error] = "Sorry, there was an error sending your message. Please try again."
    redirect_to contact_path
  end
end
