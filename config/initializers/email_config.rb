# Email Configuration for Gmail
ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.smtp_settings = {
  address:              'smtp.gmail.com',
  port:                 587,
  domain:               'gmail.com',
  user_name:            ENV['EMAIL_USERNAME'], # Your Gmail address
  password:             ENV['EMAIL_PASSWORD'], # Your Gmail app password
  authentication:       'plain',
  enable_starttls_auto: true
}

# For development, you can also use letter_opener to preview emails in the browser
# instead of actually sending them:
#
# if Rails.env.development?
#   ActionMailer::Base.delivery_method = :letter_opener
# end
