class User < ApplicationRecord
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze

  before_save{email.downcase!}
  validates :name, presence: true,
    length: {maximum: Settings.user.max_name_length}
  validates :email, presence: true,
    format: {with: VALID_EMAIL_REGEX},
    uniqueness: {case_sensitive: false}
  validates :password, presence: true,
    length: {minimum: Settings.user.max_pass_length}
  has_secure_password

  def self.digest string
    cost =  if ActiveModel::SecurePassword.min_cost
              BCrypt::Engine::MIN_COST
            else
              BCrypt::Engine.cost
            end
    BCrypt::Password.create string, cost: cost
  end
end
