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
         let posts = '';
                                     data.forEach(element => {
                                       posts += `<div class='card'><ul> 
                                       <li>${element.body}</li>
                                       <li>${element.id}</li>
                                       <li>${element.title}</li>
                                       <li>${element.userId}</li>

                                       </ul>

                                       </div>`
         document.getElementById('button1').innerHTML = posts;
         });  
         
      });
     }
     

        function myComments() {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((data) => {
             console.log(data)
             let comments = '';
                                     data.forEach(element => {
                                       comments += `<div class='card'><ul> 
                                       <li>${element.body}</li>
                                       <li>${element.email}</li>
                                       <li>${element.id}</li>
                                       <li>${element.name}</li>
                                       <li>${element.postId}</li>

                                       </ul>

                                       </div>`
             document.getElementById('button2').innerHTML = comments;
             });

            });
          }


             function myAlbums() {
                fetch('https://jsonplaceholder.typicode.com/albums')
                .then(response => response.json())
                .then(data => {
                     console.log(data)
                     let albums = '';
                                     data.forEach(element => {
                                       albums += `<div class='card'><ul> 
                                       <li>${element.id}</li>
                                       <li>${element.title}</li>
                                       <li>${element.userId}</li>
                                 
                                       </ul>

                                       </div>`
                     document.getElementById('button3').innerHTML = albums;
                     });

                  });

                    }


                     function myPhotos() {
                        fetch('https://jsonplaceholder.typicode.com/photos')
                        .then(response => response.json())
                        .then(data => {
                             console.log(data)
                             console.log(data)
                                     let photos = '';
                                     data.forEach(element => {
                                       photos += `<div class='card'><ul> 
                                       <li>${element.albumId}</li>
                                       <li>${element.id}</li>
                                       <img src="https://via.placeholder.com/150/92c952">
                                       <li>${element.title}</li>
                                       <li>${element.url}</li>

                                       </ul>

                                       </div>`
                             document.getElementById('button4').innerHTML = photos;
                             });

                           });
                         }


                             function myTodos() {
                                fetch('https://jsonplaceholder.typicode.com/todos')
                                .then(response => response.json())
                                .then(data => {
                                     console.log(data)
                                     let todos = '';
                                     data.forEach(element => {
                                       todos += `<div class='card'><ul> 
                                       <li>${element.completed}</li>
                                       <li>${element.id}</li>
                                       <li>${element.title}</li>
                                       <li>${element.userId}</li>
                                 
                                       </ul>

                                       </div>`
                                     document.getElementById('button5').innerHTML = todos;
                                     });

                                    });

                                   }


                                     function myUsers() {
                                        fetch('https://jsonplaceholder.typicode.com/users')
                                        .then(response => response.json())
                                        .then(data => {
                                             console.log(data)
                                             let users = '';
                                             data.forEach(element => {
                                                users += `<div class='card'><ul> 
                                                <li>${element.name}</li>
                                                <li>${element.phone}</li>
                                                <li>${element.website}</li>
                                                <li>${element.username}</li>
                                                <li>${element.email}</li>
                                                <li>${element.address.street}</li>
                                                <li>${element.company.name}</li>
                                                

                                                </ul>

                                                </div>`
                                                document.getElementById('button6').innerHTML = users;
                                             });


                                          
                                             });
                                        }

