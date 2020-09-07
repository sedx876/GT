class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.string :start_date
      t.string :end_date
      t.integer :location_id
      t.integer :user_id
    end
  end
end
