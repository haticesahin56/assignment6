export const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if (!response.ok) {
        throw new Error('An error occurred while retrieving data from the server!');
    }
    
    return await response.json();
};