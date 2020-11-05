class MicropostsController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]
  before_action :load_micropost, only: :destroy

  def create
    @micropost = current_user.microposts.build(micropost_params)
    @micropost.image.attach(params[:micropost][:image])
    if @micropost.save
      flash[:success] = t "micropost.create"
      redirect_to root_url
    else
      @feed_items = current_user.feed.paginate(page: params[:page])
      render "static_pages/home"
    end
  end

  def destroy
    if @micropost.destroy
      flash[:success] = t "micropost.deleted"
    else
      flash[:danger] = t "micropost.delete_fail"
    end
    redirect_to request.referer || root_path
  end

  private

  def micropost_params
    params.require(:micropost).permit(:content, :image)
  end

  def load_micropost
    return if @micropost = current_user.microposts.find_by(id: params[:id])

    flash[:danger] = t "micropost.error"
    redirect_to root_url if @micropost.nil?
  end
end
