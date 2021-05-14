export interface ISearch {
    Search : IMovie[],
    totalResults: number,
    Response: string,
}

export interface IMovie  {
    
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string,
}

export interface IFinal {
    Title: string,
    Year: string,
    Ratings: Array<any>,
    Poster:string,
}
export function emptyISearch(): ISearch{

    return{
    Search : [],
    totalResults: 0,
    Response: "True",
    }
} 