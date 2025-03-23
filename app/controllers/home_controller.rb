class HomeController < ApplicationController
  # CSRF protection is re-enabled
  
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
    
    begin
      # Send the email
      ContactMailer.contact_email(@name, @email, @subject, @message).deliver_now
      
      # Redirect with a flash message
      flash[:success] = "Thank you for your message! I'll get back to you soon."
      redirect_to contact_path
    rescue => e
      # Log the error for debugging
      Rails.logger.error("Email sending error: #{e.message}")
      Rails.logger.error(e.backtrace.join("\n"))
      
      flash[:error] = "Sorry, there was an error sending your message: #{e.message}"
      redirect_to contact_path
    end
  end
end
