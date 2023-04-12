import Modal from './Modal';
import '../css/post_write.css';
import Topic from '../comp/img/Topic';
import { useState } from 'react';
import { COLORS } from '../css/Color';
import CheckWhite from '../comp/img/CheckWhite';
import { axiosJwtPostInstance } from '../util/axiosPlugin';
import { postType } from '../type/enum';

const TopicMenu = ({ name, setMenuVisible, setTopic }) => {
  const [isHover, setIsHovering] = useState(false);
  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  return (
    <div
      className='post_write_topic_sub'
      style={{ backgroundColor: !isHover ? '#fff' : COLORS.point, color: !isHover ? COLORS.black_800 : COLORS.white }}
      onClick={() => {
        setMenuVisible((e) => !e);
        setTopic(name);
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <p>{name}</p>
      <CheckWhite />
    </div>
  );
};

const menuTest = Object.values(postType);

const PostWrite = ({ visible, setVisible }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [inputs, setInputs] = useState({ title: '', content: '' });
  const [topic, setTopic] = useState('');

  const openTopic = () => setMenuVisible((e) => !e);

  const handleSubmit = () => {
    if (window.confirm('등록 하시겠습니까?')) {
      valid();
    }
  };

  const valid = () => {
    if (inputs.title.length < 2) {
      alert('제목을 확인해주세요.');
      return;
    }
    if (inputs.content.length < 2) {
      alert('내용을 확인해주세요.');
      return;
    }
    if (topic === '') {
      alert('토픽을 선택해주세요.');
    }
    submit();
  };

  const submit = () => {
    const indexOfS = Object.values(postType).indexOf(topic as unknown as postType);
    const key = Object.keys(postType)[indexOfS];

    axiosJwtPostInstance
      .post('/post', { title: inputs.title, content: inputs.content, postType: key })
      .then((res) => {
        alert('등록 되었습니다.');
        setVisible(false);
        setInputs({ title: '', content: '' });
      })
      .catch((err) => {
        console.log(err);
        alert('실패.');
      })
      .finally(() => {});
  };

  return (
    <Modal
      setVisible={setVisible}
      visible={visible}
      className={'post_write'}
      children={
        <>
          <div className='post_write_header'>
            <div>
              <a
                onClick={() => {
                  setInputs({ title: '', content: '' });
                  setVisible((e) => !e);
                }}
                className='modal_close'
              ></a>
            </div>
            <div className='post_write_header_title'>
              <p>글쓰기</p>
            </div>
            <div className='post_write_submit'>
              <button onClick={handleSubmit} className='post_write_submit_btn'>
                등록
              </button>
            </div>
          </div>
          <div className='post_write_topic' onClick={openTopic}>
            <div className='post_write_topic_icon'>
              <Topic />
              <p>{topic ? topic : '토픽을 선택해주세요.'}</p>
            </div>
          </div>

          <div className='post_write_body'>
            {menuVisible ? (
              <div className='post_write_topic_menu_wrap'>
                {menuTest.map((item) => {
                  return <TopicMenu key={item.toString() + '_'} name={item} setMenuVisible={setMenuVisible} setTopic={setTopic} />;
                })}
              </div>
            ) : null}

            <div className='post_write_form'>
              <div className='post_write_title_wrap'>
                <input
                  value={inputs.title}
                  onChange={(event) =>
                    setInputs((e) => {
                      return { ...e, title: event.target.value };
                    })
                  }
                  maxLength={20}
                  className='post_write_title'
                  placeholder='제목을 입력해주세요.'
                />
              </div>
              <div className='post_write_textarea_wrap'>
                <textarea
                  value={inputs.content}
                  onChange={(event) =>
                    setInputs((e) => {
                      return { ...e, content: event.target.value };
                    })
                  }
                  className='post_write_textarea'
                  placeholder='토픽에 맞지 않는 글로 판단되어 다른유저로부터 일정 수 이상의 신고를 받는 경우 글이 자동으로 숨김처리 될 수 있습니다.'
                ></textarea>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

export default PostWrite;
