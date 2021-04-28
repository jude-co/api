/*document.getElementById('button1').addEventListener('click', Post);
document.getElementById('button2').addEventListener('click', Comments);
document.getElementById('button3').addEventListener('click', Albums);
document.getElementById('button4').addEventListener('click', Photos);
document.getElementById('button5').addEventListener('click', Todos);
document.getElementById('button6').addEventListener('click', Users);*/


 function myPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
         console.log(data)
         document.getElementById('button1').innerHTML = JSON.stringify(data);
         });   
     }
     

        function myComments() {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((data) => {
             console.log(data)
             document.getElementById('button2').innerHTML = data;
             });
          }


             function myAlbums() {
                fetch('https://jsonplaceholder.typicode.com/albums')
                .then(response => response.json())
                .then(data => {
                     console.log(data)
                     document.getElementById('button3').innerHTML = data;
                     });
                    }


                     function myPhotos() {
                        fetch('https://jsonplaceholder.typicode.com/photos')
                        .then(response => response.json())
                        .then(data => {
                             console.log(data)
                             document.getElementById('button4').innerHTML = data;
                             });
                         }


                             function myTodos() {
                                fetch('https://jsonplaceholder.typicode.com/todos')
                                .then(response => response.json())
                                .then(data => {
                                     console.log(data)
                                     document.getElementById('button5').innerHTML = data;
                                     });
                                   }


                                     function myUsers() {
                                        fetch('https://jsonplaceholder.typicode.com/users')
                                        .then(response => response.json())
                                        .then(data => {
                                             console.log(data)
                                             document.getElementById('button6').innerHTML = JSON.stringify(data);
                                             });
                                        }

