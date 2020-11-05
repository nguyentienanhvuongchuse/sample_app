class Micropost < ApplicationRecord
  belongs_to :user
  has_one_attached :image
  scope :newest, ->{order(created_at: :desc)}
  scope :micropost_ids, -> ids{where(user_id: ids)}
  validates :user_id, presence: true
  validates :content, presence: true, length:
    {maximum: Settings.micropost.max_value}
  validates :image,
            content_type: {in: %i(jpg gif png jpeg),
                           message: I18n.t("micropost.img_valid")},
            size: {less_than: Settings.micropost.mb.megabytes,
                   message: I18n.t("micropost.less_than_5")}

  def display_image
    image.variant(resize_to_limit: [Settings.micropost.width,
      Settings.micropost.height])
  end
end
