import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

import { ImageYrl } from '../ComponentsLibrary/ImageYrl/ImageYrl'
import { ButtonYrl } from '../ComponentsLibrary/ButtonYrl/ButtonYrl'
import { IconYrl } from '../ComponentsLibrary/IconYrl/IconYrl'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { SERVERS_MAIN } from '../../Constants/servers.const'

interface SkillExchangeIntroArgs {}

export const SkillExchangeIntro: React.FunctionComponent<
  SkillExchangeIntroArgs
> = (props: SkillExchangeIntroArgs): ReactElement => {
  const { language } = useSelector((store2: RootStoreType) => store2)

  const propsOut = {
    iconRiVoiceprintFillProps: {
      icon: 'RiVoiceprintFill',
      icon2: null,
      classAdded: 'IconYrl_RiVoiceprintFill',
    },
    iconMdArrowForwardIosProps: {
      icon: 'MdArrowRight',
      icon2: null,
      classAdded: 'IconYrl_ArrowRight',
    },
    iconAiOutlineQuestionCircleProps: {
      icon: 'AiOutlineQuestionCircle',
      icon2: null,
      classAdded: 'IconYrl_AiOutlineQuestionCircle',
    },
    iconMdLanguageProps: {
      icon: 'MdLanguage',
      icon2: null,
      classAdded: 'IconYrl_MdLanguage',
    },
    iconIoLanguageSharpProps: {
      icon: 'IoLanguageSharp',
      icon2: null,
      classAdded: 'IconYrl_IoLanguageSharp',
    },
    iconIoChatbubblesOutlineProps: {
      icon: 'IoChatbubblesOutline',
      icon2: null,
      classAdded: 'IconYrl_IoChatbubblesOutline',
    },
    iconBiSelectMultipleProps: {
      icon: 'BiSelectMultiple',
      icon2: null,
      classAdded: 'IconYrl_BiSelectMultiple',
    },
    iconBsPiggyBankProps: {
      icon: 'BsPiggyBank',
      icon2: null,
      classAdded: 'IconYrl_BsPiggyBank',
    },
    iconAiOutlineShareAltProps: {
      icon: 'AiOutlineShareAlt',
      icon2: null,
      classAdded: 'IconYrl_AiOutlineShareAlt',
    },
    iconHiUsersProps: {
      icon: 'HiUsers',
      icon2: null,
      classAdded: 'IconYrl_HiUsers',
    },
    iconMdLanguageProps2: {
      icon: 'MdLanguage',
      icon2: null,
      classAdded: 'IconYrl_MdLanguage2',
    },
    iconBsFillPersonCheckFillProps: {
      icon: 'BsFillPersonCheckFill',
      icon2: null,
      classAdded: 'IconYrl_BsFillPersonCheckFill',
    },
    iconFaUsersCogProps: {
      icon: 'FaUsersCog',
      icon2: null,
      classAdded: 'IconYrl_FaUsersCog',
    },
    iconMdHomeRepairServiceProps: {
      icon: 'MdHomeRepairService',
      icon2: null,
      classAdded: 'IconYrl_MdHomeRepairService',
    },
    iconFaUsersProps: {
      icon: 'FaUsers',
      icon2: null,
      classAdded: 'IconYrl_FaUsers',
    },
    iconBiVideoPlusProps: {
      icon: 'BiVideoPlus',
      icon2: null,
      classAdded: 'IconYrl_BiVideoPlus',
    },
    icon6Props: {
      icon: '',
      icon2: null,
      classAdded: 'IconYrl_',
    },
    buttonContinueProps: {
      classAdded: 'Button_сontinueIntroSep',
      icon: 'MdForward',
      icon2: null,
      captureLeft: DICTIONARY['Continue'][language],
      captureRight: '',
      action: {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [
          {
            childName: 'SkillExchangeIntro',
            isActive: false,
            childProps: {},
          },
        ],
      },
      isDisplaying: true,
      tooltipText: '',
      tooltipPosition: '',
      isTooltipVisibleForced: false,
      isUnderlined: false,
    },
    buttonNextProps: {
      classAdded: 'Button_сontinueIntroSep',
      icon: 'MdForward',
      icon2: null,
      captureLeft: DICTIONARY['Next'][language],
      captureRight: '',
      action: {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [
          {
            childName: 'SkillExchangeIntro',
            isActive: false,
            childProps: {},
          },
        ],
      },
      isDisplaying: true,
      tooltipText: '',
      tooltipPosition: '',
      isTooltipVisibleForced: false,
      isUnderlined: false,
    },
    collageImageFaceProps: {
      classAdded: 'Image_collageImageFace',
      src: `${SERVERS_MAIN.remote}/images/collage-happy-multicultural-people-faces-211122-3x3-41.jpg`,
      action: {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [
          {
            childName: 'SkillExchangeIntro',
            isActive: false,
            childProps: {},
          },
        ],
      },
    },

    collageImageIndustriesProps: {
      classAdded: 'Image_collageImageIndustries',
      src: `${SERVERS_MAIN.remote}/images/collage-icon-industries-211122-YxY-51.jpg`,
      action: {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [
          {
            childName: 'SkillExchangeIntro',
            isActive: false,
            childProps: {},
          },
        ],
      },
    },
  }

  return (
    <div className='SkillExchangeIntro'>
      <h1 className='__title01'>
        {DICTIONARY['Knowledge_Exchange_and_Useful_Contacts'][language]}
      </h1>

      <h1 className='__title02'>
        {DICTIONARY['Knowledge_and_experience'][language]}{' '}
        {DICTIONARY['directly_from_people'][language]}
      </h1>

      <div className='__textBlock'>
        <div className='_row'>
          <div className='_col _p2_Media'>
            <div className='_statistics'>
              {DICTIONARY['_3_million_members'][language]}
            </div>
            <div className='_statistics'>
              {DICTIONARY['_175_countries'][language]}
            </div>
            <div className='_statistics'>
              {DICTIONARY['_11000_knowledges_and_skills'][language]}
            </div>
          </div>
        </div>
      </div>

      <div className='__textBlock'>
        <div className='_row p_2_0'>
          <div className='_col _flex_1 _bg_color_1 _asym_corners m_0_1_0_0 p_1_2'>
            <div className='_text'>
              {
                DICTIONARY['Find_and_add_people_contacts_by_interests'][
                  language
                ]
              }
            </div>
            <div className='_iconValue'>
              <IconYrl {...propsOut.iconHiUsersProps} />
            </div>
          </div>
          <div className='_col _flex_1 _bg_color_2 _asym_corners m_0_1_0_0 p_1_2'>
            <div className='_text'>
              {
                DICTIONARY['Get_answers_to_your_questions_and_information'][
                  language
                ]
              }
            </div>
            <div className='_iconValue'>
              <IconYrl {...propsOut.iconBsPiggyBankProps} />
            </div>
          </div>
          <div className='_col _flex_1 _bg_color_3 _asym_corners m_0_1_0_0 p_1_2'>
            <div className='_text'>
              {DICTIONARY['Share_your_knowledge'][language]}{' '}
              {DICTIONARY['and_skills'][language]}
            </div>
            <div className='_iconValue'>
              <IconYrl {...propsOut.iconAiOutlineShareAltProps} />
            </div>
          </div>
          <div className='_col _flex_1 _bg_color_4 _asym_corners p_1_2'>
            <div className='_text'>
              {DICTIONARY['Communicate_practice_foreign_languages'][language]}
            </div>
            <div className='_iconValue'>
              <IconYrl {...propsOut.iconMdLanguageProps2} />
            </div>
          </div>
        </div>
      </div>
      <div className='_button _mobileVisible'>
        <ButtonYrl {...propsOut.buttonContinueProps} />
      </div>

      <div className='__textBlock'>
        <div className='_row _p5_Media'>
          <div className='_col'>
            <h2 className='_h2'>
              {DICTIONARY['Service_works_simply'][language]}
            </h2>
          </div>
        </div>
        <div className='_row _p6_Media'>
          <div className='_col _flex_1 _bordered p_1_1'>
            <div className='_text'>
              {DICTIONARY['Select'][language]} {DICTIONARY['topic'][language]}{' '}
              {DICTIONARY['clarify_the_question'][language]}
            </div>
            <div className='_iconAndText'>
              <IconYrl {...propsOut.iconAiOutlineQuestionCircleProps} />
              <div className='_text'>{DICTIONARY['category'][language]}</div>
            </div>
            <div className='_iconAndText'>
              <IconYrl {...propsOut.iconIoLanguageSharpProps} />
              <div className='_text'>{DICTIONARY['language'][language]}</div>
            </div>
            <div className='_iconAndText'>
              <IconYrl {...propsOut.iconBiSelectMultipleProps} />
              <div className='_text'>
                {DICTIONARY['other_criteria'][language]}
              </div>
            </div>
          </div>

          <div className='_col'>
            <IconYrl {...propsOut.iconMdArrowForwardIosProps} />
          </div>

          <div className='_col _flex_1 _bordered p_1_1'>
            <div className='_text'>
              {DICTIONARY['Get_users_by_topic'][language]}
            </div>
            <div className='_iconAndText'>
              <IconYrl {...propsOut.iconFaUsersProps} />
              <div className='_text'>
                {DICTIONARY['A_list_to_chat_is_created'][language]}
              </div>
            </div>
          </div>

          <div className='_col'>
            <IconYrl {...propsOut.iconMdArrowForwardIosProps} />
          </div>

          <div className='_col _flex_1 _bordered p_1_1'>
            <div className='_text'>
              {DICTIONARY['Use_filters'][language]}{' '}
              {DICTIONARY['and'][language]} {DICTIONARY['choose'][language]}{' '}
              {DICTIONARY['person'][language]} {DICTIONARY['by'][language]}
            </div>
            <div className='_iconAndText'>
              <IconYrl {...propsOut.iconFaUsersCogProps} />
              <div className='_text'>{DICTIONARY['ageGroup'][language]}</div>
            </div>
            <div className='_iconAndText'>
              <IconYrl {...propsOut.iconBsFillPersonCheckFillProps} />
              <div className='_text'>{DICTIONARY['gender'][language]}</div>
            </div>
            <div className='_iconAndText'>
              <IconYrl {...propsOut.iconMdHomeRepairServiceProps} />
              <div className='_text'>{DICTIONARY['reputation'][language]}</div>
            </div>
            <div className='_iconAndText'>
              <IconYrl {...propsOut.iconMdLanguageProps} />
              <div className='_text'>
                {DICTIONARY['geography'][language]}
                {'/ '}
                {DICTIONARY['country'][language]}
              </div>
            </div>
          </div>

          <div className='_col'>
            <IconYrl {...propsOut.iconMdArrowForwardIosProps} />
          </div>

          <div className='_col _flex_1 _bordered p_1_1'>
            <div className='_text'>
              {DICTIONARY['Say_hello_and_hear_new_things'][language]}
            </div>
            <div className='_iconAndText'>
              <IconYrl {...propsOut.iconIoChatbubblesOutlineProps} />
              <div className='_text'>{DICTIONARY['messaging'][language]}</div>
            </div>
            <div className='_iconAndText'>
              <IconYrl {...propsOut.iconRiVoiceprintFillProps} />
              <div className='_text'>{DICTIONARY['voice'][language]}</div>
            </div>
            <div className='_iconAndText'>
              <IconYrl {...propsOut.iconBiVideoPlusProps} />
              <div className='_text'>{DICTIONARY['video'][language]}</div>
            </div>
          </div>
        </div>
      </div>

      <div className='__textBlock'>
        <div className='_row'>
          <div className='_col'>
            <h2 className='_h2'>{DICTIONARY['Features'][language]}</h2>
          </div>
        </div>
        <div className='_row _p6_Media'>
          <div className='_col _flex_1 _center _p4_Media _m1_Media'>
            <h2 className='_text'>
              {DICTIONARY['real_people_is_talking_to_you'][language]}{' '}
              {DICTIONARY['Everybody_is_protected'][language]}
            </h2>
            <ImageYrl {...propsOut.collageImageFaceProps} />
          </div>
          <div className='_col _flex_1 _center _p3_Media _m1_Media'>
            <h2 className='_text'>
              {DICTIONARY['There_are_people_for_all_major_topics'][language]}{' '}
              {DICTIONARY['You_don_t_need_to_wait'][language]}
            </h2>
            <ImageYrl {...propsOut.collageImageIndustriesProps} />
          </div>
        </div>

        <div className='_row p_2_0_1_0'>
          <div className='_col'>
            <h2 className='_text'>
              {DICTIONARY['You_can_find_a_person_of_your_interests'][language]}{' '}
              {
                DICTIONARY['who_is_ready_to_answer_your_topic_right_now'][
                  language
                ]
              }
            </h2>
          </div>
        </div>
      </div>
      <div className='_button p_3_0_2_0'>
        <ButtonYrl {...propsOut.buttonNextProps} />
      </div>
    </div>
  )
}
