function bm(movie){
    let BookMarkList = JSON.parse(localStorage.getItem('BookMarkList')) ? JSON.parse(localStorage.getItem('BookMarkList')): [];
    BookMarkList.push(movie)
    localStorage.setItem('BookMarkList',JSON.stringify(BookMarkList));
};