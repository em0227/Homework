class User < ApplicationRecord
    

    validates :username, :session_token, :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true} #test the password length or password_digest? Do we need getter for password? yes!
    #validate :password_valid?
    before_validation :ensure_session_token

    attr_reader :password

    # def password_valid?
    #     if !password_digest.valid?
    #         errors[:password_digest] << 'Password can''t be blank'
    #     end
    # end

    def self.find_by_credentials(username, password)
        @users = User.find_by(username: username)
        return nil if user.nil?
        @users.each do |user|
            return user if user.is_password?(password)
        end

    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def password
        @password
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    

    
end
