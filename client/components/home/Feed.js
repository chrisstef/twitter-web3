import { useContext, useEffect } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import TweetBox from './TweetBox'
import Post from '../Post'
import { BsStars } from 'react-icons/bs'

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

function Feed() {
  const { tweets } = useContext(TwitterContext)

  return (
    <div className={`${style.wrapper} no-scrollbar`}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            tweet.author.name === 'Unnamed'
              ? `${tweet.author.walletAddress.slice(
                  0,
                  5
                )}...${tweet.author.walletAddress.slice(-4)}`
              : tweet.author.name
          }
          userName={`${tweet.author.walletAddress.slice(
            0,
            5
          )}...${tweet.author.walletAddress.slice(-4)}`}
          text={tweet.tweet}
          avatar={tweet.author.profileImage}
          isProfileImageNft={tweet.author.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default Feed
