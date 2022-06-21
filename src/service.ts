interface Profile {
    id: string
    name: string
    profile_image_url: string,
    username: string,
    verified: boolean
}
interface Tweet {
    author_id: string,
    created_at: string,
    id: string,
    text: string
}

export interface Post{
    profile: Profile,
    tweet: Tweet
}

export const getTweet = (postUrl):Promise<Post> => {

    // For now, consider the data is stored on a static `users.json` file
    return fetch(`https://btq.herokuapp.com/data?url=${postUrl}`)
            // the JSON body is taken from the response
            .then(res => res.json())
            .then(res => {
                    // The response has an `any` type, so we need to cast
                    // it to the `User` type, and return it from the promise
                    return res as Post
            })
}
 