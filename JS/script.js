// function editUsername() {
//     document.getElementById('username').style.display = 'none';
//     document.getElementById('newUsername').style.display = 'inline';
//     document.getElementById('newUsername').value = document.getElementById('username').innerText;
//     document.getElementById('newUsername').focus();
//     document.getElementById('newUsername').select();
//     document.getElementById('newUsername').addEventListener('keyup', function(event) {
//       if (event.key === 'Enter') {
//         event.preventDefault();
//         saveUsername();
//       }
//     });
//   }
  
//   function saveUsername() {
//     let newUsername = document.getElementById('newUsername').value;
//     if (newUsername.trim() !== '') {
//       document.getElementById('username').innerText = newUsername;
//     }
//     document.getElementById('newUsername').style.display = 'none';
//     document.getElementById('username').style.display = 'inline';
//   }
  
//   document.getElementById('fileInput').addEventListener('change', function() {
//     const file = this.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function(e) {
//         document.getElementById('profilePic').setAttribute('src', e.target.result);
//       }
//       reader.readAsDataURL(file);
//     }
//   });

function submitPost() {
    const postText = document.getElementById('postText').value;
    if (postText.trim() !== '') {
      createPost(postText);
      document.getElementById('postText').value = ''; // Clear the input after posting
    }
  }
  
  function createPost(text) {
    const postsContainer = document.getElementById('posts');
    const post = document.createElement('div');
    post.classList.add('post');
    post.innerText = text;
    postsContainer.appendChild(post);
  }

  function submitReply(postId) {
    const post = document.querySelector(`[data-postid="${postId}"]`);
    const replyInput = post.querySelector('.reply-input');
    const replyText = replyInput.value.trim();
    
    if (replyText !== '') {
      createReply(postId, replyText);
      replyInput.value = '';
    }
  }
  
  function createReply(postId, text) {
    const post = document.querySelector(`[data-postid="${postId}"]`);
    const repliesSection = post.querySelector(`#replies-${postId}`);
    
    const reply = document.createElement('div');
    reply.classList.add('reply');
    reply.innerText = text;
    repliesSection.appendChild(reply);
  }


  function submitPost() {
    const postText = document.getElementById('postText').value;
    if (postText.trim() !== '') {
      createPost(postText);
      document.getElementById('postText').value = '';
    }
  }
  
  function createPost(text) {
    const postsContainer = document.getElementById('posts');
    const post = document.createElement('div');
    post.classList.add('post');
    post.innerText = text;
  
    const commentInput = document.createElement('input');
    commentInput.setAttribute('type', 'text');
    commentInput.setAttribute('placeholder', 'Add a comment');
    
    const commentButton = document.createElement('button');
    commentButton.innerText = 'Comment';
    commentButton.onclick = function() {
      const commentText = commentInput.value;
      if (commentText.trim() !== '') {
        createComment(commentText, post);
        commentInput.value = '';
      }
    };
  
    post.appendChild(commentInput);
    post.appendChild(commentButton);
    postsContainer.appendChild(post);
  }
  
  function createComment(text, post) {
    const comment = document.createElement('div');
    comment.classList.add('comment');
    comment.innerText = text;
    post.appendChild(comment);
  }