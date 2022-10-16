db.movieDetails.find({genres: {$all: ["Comedy", "Crime", "Drama"]}}, 
                     {_id: 0, title: 1, genres: 1}).pretty()


{sections: {$all: ["AG1", "MD1", "OA1"]}}