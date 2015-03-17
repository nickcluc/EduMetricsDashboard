# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
responder_types = ["student", "faculty", "parent"]
responder_types.each do |type|
  rt = ResponderType.find_or_initialize_by(name: type)
  rt.save
end
cats = ["Resilience", "Time Management", "Safety", "Support for Learning", "Relationships", "Facilities / Resources"]

cats.each do |cat|
  c = Category.find_or_initialize_by(name: cat)
  c.save
end

n = 0
until n == 365
  Category.all.each do |cat|
    r = Response.create(value: (0..400).to_a.sample, category_id: cat.id, responder_type_id: 1)
    r.created_at = n.days.ago
    r.save
  end
  n+=1
end

n = 0
until n == 365
  Category.all.each do |cat|
    r = Response.create(value: (0..400).to_a.sample, category_id: cat.id, responder_type_id: 2)
    r.created_at = n.days.ago
    r.save
  end
  n+=1
end

n = 0
until n == 365
  Category.all.each do |cat|
    r = Response.create(value: (0..400).to_a.sample, category_id: cat.id, responder_type_id: 3)
    r.created_at = n.days.ago
    r.save
  end
  n+=1
end
