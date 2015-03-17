class Response < ActiveRecord::Base
  belongs_to :category
  belongs_to :responder_type
end
