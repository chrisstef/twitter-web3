import { useEffect, useContext, useState } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const ProfileTweets = () => {
  const { currentAccount, currentUser } = useContext(TwitterContext)

  return (
    <div className={style.wrapper}>
      {currentUser.tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            currentUser.name === 'Unnamed'
              ? `${currentUser.walletAddress.slice(
                  0,
                  5
                )}...${currentUser.walletAddress.slice(-4)}`
              : currentUser.name
          }
          userName={`${currentAccount.slice(0, 5)}...${currentAccount.slice(
            -4
          )}`}
          text={tweet.tweet}
          avatar={currentUser.profileImage}
          timestamp={tweet.timestamp}
          isProfileImageNft={currentUser.isProfileImageNft}
        />
      ))}
    </div>
  )
}

export default ProfileTweets
