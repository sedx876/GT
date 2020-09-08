
# User.create(name: "Sharon", username: "sedx", password_digest: "password")
# Location.create(city: "NYC", state: "NY", country: "USA")
# Location.create(city: "Paris", state: "Metropole Du Grand Paris", country: "France")

anaheim = Location.create(city: "Anaheim", state: "California", country: "USA")
disney = anaheim.attractions.create(name: "Disneyland", description: "Happiest place on Earth!")

disney = Attraction.first
nadia = User.first

nadia_disney = nadia.trips.create(start_date: "2019-06-01", end_date: "2019-06-08")
nadia_disney.visits.create(attraction: disney, date: "2019-06-01")
nadia.comments.create(content: "Fun for all", attraction: disney)