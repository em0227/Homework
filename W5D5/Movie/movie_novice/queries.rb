# == Schema Information
#
# Table name: actors
#
#  id          :integer      not null, primary key
#  name        :string
#
# Table name: movies
#
#  id          :integer      not null, primary key
#  title       :string
#  yr          :integer
#  score       :float
#  votes       :integer
#  director_id :integer
#
# Table name: castings
#  id          :integer      not null, primary key
#  movie_id    :integer      not null
#  actor_id    :integer      not null
#  ord         :integer


def find_angelina
  #find Angelina Jolie by name in the actors table
  #Actor.where('name = ?', 'Angelina Jolie') is this returning hash or ins?? is a hash-like object, can also use pluck
  Actor.find_by(name: 'Angelina Jolie')
end

def top_titles
  # get movie titles from movies with scores greater than or equal to 9
  # hint: use 'select' and 'where'
  Movie
    .select('id', 'title')
    .where('score >= 9')
end

def star_wars
  #display the id, title and year of each Star Wars movie in movies.
  # hint: use 'select' and 'where'
  Movie
    .select('id', 'title', 'yr')
    .where('title LIKE (?)', '%Star War%')
end


def below_average_years
  #display each year with movies scoring under 5,
  #with the count of movies scoring under 5 aliased as bad_movies,
  #in descending order
  # hint: use 'select', 'where', 'group', 'order'
  Movie
    .select('yr, COUNT(title) AS bad_movies')
    .where('score < 5')
    .group('yr')
    .order('COUNT(title) DESC')
end

def alphabetized_actors
  # display the first 10 actor names ordered from A-Z
  # hint: use 'order' and 'limit'
  # Note: Ubuntu users may find that special characters
  # are alphabetized differently than the specs.
  # This spec might fail for Ubuntu users. It's ok!
  Actor
    .select('id', 'name')
    .order('name ASC')
    .limit('10')
end

def pulp_fiction_actors
  # practice using joins
  # display the id and name of all actors in the movie Pulp Fiction
  # hint: use 'select', 'joins', 'where'
  Actor.select('id', 'name').joins(castings: :movie).where('title = ?', 'Pulp Fiction')
  #(:castings, :movies) can also works but need to add distinct to delete duplicates
  #solution simply has joins(:movies)
  #.uniq  #why does it have duplicate??
end

def uma_movies
  #practice using joins
  # display the id, title, and year of movies Uma Thurman has acted in
  # order them by ascending year
  # hint: use 'select', 'joins', 'where', and 'order'
  Movie
    .select('id', 'title', 'yr')
    .joins(:actors) #originally wrote joins(:actors, :castings) and will cause duplicates
    .where('name = ?', 'Uma Thurman')
    .order('yr ASC')
    #.uniq
end
