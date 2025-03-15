import ConvenienceIcon from '../../components/icon/ConvenienceIcon.jsx';
import CautionIcon from '../../components/icon/CautionIcon.jsx';
import * as style from './style/DetailPage.DetailInfo.js';
import ProfilerTableLogWrapper from '../../components/search/ProfilerTableLogWrapper.jsx';

const DetailInfo = ({ cautions, convenience, number }) => {
  return (
    <style.DetailInfoContainer>
      <style.InfoGroupContainer>
        <style.DetailInfoTitle>편의시설</style.DetailInfoTitle>
        <style.ConvenienceContainer>
          {convenience.map((item, index) => (
            <style.ConvenienceEach key={index}>
              <ConvenienceIcon convenience={item} key={index} />
              {item}
            </style.ConvenienceEach>
          ))}
        </style.ConvenienceContainer>
      </style.InfoGroupContainer>
      <style.InfoGroupContainer>
        <style.DetailInfoTitle>유의사항</style.DetailInfoTitle>
        <style.InfoContainer>
          {cautions.map((item, index) => (
            <style.ConvenienceEach key={index}>
              <CautionIcon caution={item} key={index} />
              {item}
            </style.ConvenienceEach>
          ))}
        </style.InfoContainer>
      </style.InfoGroupContainer>
    </style.DetailInfoContainer>
  );
};
export default DetailInfo;
