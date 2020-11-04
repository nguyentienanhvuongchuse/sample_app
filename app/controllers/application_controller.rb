class ApplicationController < ActionController::Base
  include SessionsHelper
  before_action :set_locale
  def default_url_options
    {locale: I18n.locale}
  end

  private

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  def logged_in_user
    return if logged_in?

    store_location
    flash[:danger] = t "user.not_loged_in"
    redirect_to login_url
  end
end
