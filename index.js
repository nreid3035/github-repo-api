/******** FUNCTIONALITY OUTLINE 
1. Listen for submit of user name
2. retrieve value of input field on submit
3. use this value to access the github api
4. access github api dynamically with fetch
5. log those results
6. display those results to the page
*/




function fetchRepos(githubHandle) {
    fetch(`https://api.github.com/users/${githubHandle}/repos`)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(error => console.log(error)); 
}

function displayResults(responseJson) {
    
    $('.js-results').empty();

    for (let i = 0; i < responseJson.length; i++) {
        $('.js-results').append(`
        <div>
          <h3>Repository Name: ${responseJson[i].name}</h3>
          <a href='${responseJson[i].svn_url}'>LINK</a>
        </div>`)
    }
}


let githubHandle;
function formSubmitListener() {
    $('.js-form').on('submit', function(event) {
        event.preventDefault();
        githubHandle = $('#user-name').val();
        fetchRepos(githubHandle);
    })
}

$(formSubmitListener);