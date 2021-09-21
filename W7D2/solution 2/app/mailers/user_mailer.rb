class UserMailer < ApplicationMailer
default from: 'everybody@appacademy.io'

  def welcome_email(user)
    # your code here
    @user = user
    @url  = 'localhost:3000/cats' #what should this be?
    mail(to: user.email, subject: 'Welcome to Cat 99')
  end
end
