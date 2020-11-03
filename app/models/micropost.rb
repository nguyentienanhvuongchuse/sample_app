class Micropost < ApplicationRecord
  belongs_to :user
  scope :recent_posts, ->{order created_at: :desc}
  mount_uploader :picture, PictureUploader
  validates :user_id, presence: true
  validates :content, presence: true,
    length: {maximum: Settings.post.max_content}
  validate  :picture_size

  private

  def picture_size
    return unless picture.size > Settings.post.max_content.megabytes

    errors.add(:picture, t("micropost.less_than_5"))
  end
end
