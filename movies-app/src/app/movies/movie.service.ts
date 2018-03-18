import { Injectable } from "@angular/core";
import { IMovie } from "./movie";

@Injectable()
export class MovieService {

    getUpcomingMovies(): IMovie[] {
        return [
            {
                'release_date': 'March 19, 2016',
                'title': 'Leaf rake with 48-inch wooden handle. -',
                'popularity': 3.2,
                'poster_path': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
                'vote_count': 0,
                'id': 0,
                'video': false,
                'original_language': '',
                'original_title': '',
                'genre_ids': [],
                'backdrop_path': '',
                'adult': false,
                'overview': '',
                'vote_average': 2.5,
            },
            {
                'release_date': 'March 18, 2016',
                'title': '15-gallon capacity rolling garden cart',
                'popularity': 4.2,
                'poster_path': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png',
                'vote_count': 0,
                'id': 0,
                'video': false,
                'original_language': '',
                'original_title': '',
                'genre_ids': [],
                'backdrop_path': '',
                'adult': false,
                'overview': '',
                'vote_average': 6.5,
            } 
        ];
    }
}