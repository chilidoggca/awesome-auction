class AddUserReferenceToAuction < ActiveRecord::Migration[5.1]
  def change
    add_reference :auctions, :user, foreign_key: true
  end
end
