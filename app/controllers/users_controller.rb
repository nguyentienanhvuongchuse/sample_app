class UsersController < ApplicationController
  before_action :logged_in_user, except: [:new, :create]
  before_action :load_user, except: [:index, :new, :create]
  before_action :correct_user, only: [:edit, :update]
  before_action :admin_user, only: :destroy

  def new
    @user = User.new
  end

  def show
    @user = User.find_by id: params[:id]
    return if @user

    flash[:warning] = t "sign_up.warning"
    redirect_to root_path
  end

  def index
    @users = User.paginate(page: params[:page], per_page: Settings.paging.p10)
  end

  def create
    @user = User.new user_params
    if @user.save
      log_in @user
      flash[:success] = t "base.welcome"
      redirect_to user_path(id: @user.id)
    else
      render :new
    end
  end

  def edit; end

  def update
    if @user.update(user_params)
      flash[:success] = t "user.updated"
      redirect_to @user
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user)
          .permit(:name, :email, :password, :password_confirmation)
  end

  def correct_user
    redirect_to(root_url) unless @user == current_user
  end

  def logged_in_user
    return if logged_in?

    store_location
    flash[:danger] = t "user.not_loged_in"
    redirect_to login_url
  end

  def load_user
    @user = User.find_by(id: params[:id])
    return if @user

    flash[:warning] = t "sign_up.warning"
    redirect_to root_path
  end
end
