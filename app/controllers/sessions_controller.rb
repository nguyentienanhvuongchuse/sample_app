class SessionsController < ApplicationController
  def new; end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user&.authenticate(params[:session][:password])
      log_in user
      remember user
      redirect_to user_path(id: user.id)
    else
      flash.now[:danger] = t "login.invalid"
      render :new
    end
  end

  def destroy
    log_out
    redirect_to root_url
  end
end
