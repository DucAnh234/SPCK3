 // JavaScript để xử lý sự kiện khi người dùng chọn thể loại phim
 const genreList = document.getElementById('genre-list');
 const movieList = document.getElementById('movie-list');

 genreList.addEventListener('click', (e) => {
     if (e.target.tagName === 'LI') {
         const selectedGenre = e.target.getAttribute('data-genre');
         // Thay đổi danh sách phim dựa trên thể loại được chọn
         displayMoviesByGenre(selectedGenre);
     }
 });

 // Một ví dụ danh sách phim dựa trên thể loại (cần cập nhật dữ liệu thực tế)
 const moviesByGenre = {
     "Hành động": ["Phim 1", "Phim 2", "Phim 3"],
     "Hài": ["Phim 4", "Phim 5", "Phim 6"],
     "Kinh dị": ["Phim 7", "Phim 8", "Phim 9"],
     "Tình cảm": ["Phim 10", "Phim 11", "Phim 12"]
 };

 function displayMoviesByGenre(genre) {
     // Xóa danh sách phim hiện tại
     movieList.innerHTML = '';

     // Hiển thị danh sách phim theo thể loại
     const movies = moviesByGenre[genre] || [];
     for (const movie of movies) {
         const listItem = document.createElement('li');
         listItem.textContent = movie;
         movieList.appendChild(listItem);
     }
 }