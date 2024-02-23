import React from 'react'
import '../src/styles/mypage.css'
import Link from 'next/link'
import MemberInfo from '@/components/mypage/MemberInfo'
import RecruitmentList from '@/components/mypage/RecruitmentList'
import ScreenSetting from '@/components/mypage/ScreenSetting'
import { useState } from 'react'

const Mypage = () => {



  const [activeComponent, setActiveComponent] = useState("MemberInfo");

  const renderComponents = () => {
    switch (activeComponent) {
      case 'MemberInfo':
        return <MemberInfo />;
      case 'RecruitmentList':
        return <RecruitmentList />;
      case 'ScreenSetting':
        return <ScreenSetting />;
      default:
        return <MemberInfo />;
    }
  }

  return (
    <div className='mypage'>
      <div className='sidebar'>
        <ul>
            <li onClick={() => setActiveComponent('MemberInfo')}>会員情報</li>
            <li onClick={() => setActiveComponent('RecruitmentList')}>募集一覧</li>
            <li onClick={() => setActiveComponent('ScreenSetting')}>画面設定</li>
        </ul>
      </div>
      <div className='contents'>
        <h1>asda</h1>
        {renderComponents()}
      </div>
    </div>
  )
}

export default Mypage
