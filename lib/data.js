import axios from "axios";


export const blogPosts = [
    {
        title: 'My First Post',
        slug: 'my-first',
        date: new Date().toString(),
        content: 'ed ut perspiciatis 111111111111'
    },
    {
        title: 'Second helping',
        slug: 'my-second',
        date: new Date().toString(),
        content: 'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehe'
    },
    {
        title: 'Third Post here!',
        slug: 'my-third',
        date: new Date().toString(),
        content: 'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehe'
    }
]


// export const remotePosts = [

// ]

export const serverPosts = async function getServerSideProps() {
    const res = await axios.get("https://cms.itzerott.com/hdgk_news/items/company_news");
    // const res = await fetch('https://cms.itzerott.com/hdgk_news/items/company_news');
    // const posts = await res.json();
    
    // console.log(res.data[0]);


  return {
      props: {
          posts: res.data,
      }
  }
}
