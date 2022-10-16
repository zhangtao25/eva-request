import { hoverTooltip } from '@codemirror/view';
import styled from '@emotion/styled';
import {FC, useContext, useRef} from 'react';

import { useEnvCodeMirror } from '../../helpers/editor/extensions/EnvCodeMirror';
import {
  getMarkFromToArr,
  HOPP_ENVIRONMENT_REGEX,
} from '../../helpers/editor/extensions/HoppEnvironment';
import {HttpContext} from "../../index";
// import { useStore } from '../../store';

const SmartEnvInputWrapper = styled.div`
  flex: 1;
  overflow: hidden;
`;

interface SmartEnvInputProps {
  value: string;
  onChange: (e: any) => void;
}
const SmartEnvInput: FC<SmartEnvInputProps> = ({ value, onChange }) => {
  const smartEnvInputRef = useRef(null);
  const {dispatch} = useContext(HttpContext)
  // const { currentEnvironment, themeClassify } = useStore();
  // console.log(themeClassify,'themeClassify')
  useEnvCodeMirror({
    container: smartEnvInputRef.current,
    value: value,
    height: '30px',
    extensions: [
      [
        hoverTooltip((view, pos, side) => {
          const { text } = view.state.doc.lineAt(pos);
          const markArrs = getMarkFromToArr(text, HOPP_ENVIRONMENT_REGEX, 'currentEnvironment');
          const index = markArrs.map((i) => pos < i.to && pos > i.from).findIndex((i) => i);
          if (index === -1) {
            return null;
          }
          return {
            pos: pos,
            end: pos,
            above: true,
            arrow: true,
            create(view) {
              const dom = document.createElement('div');
              dom.innerHTML = `
              <span class="name">${markArrs[index].matchEnv.name}</span>
              <span class="value">${markArrs[index].matchEnv.value}</span>
              `;
              dom.className = 'tooltip-theme1';
              return { dom };
            },
          };
        }),
      ],
    ],
    onChange: (val) => {
      dispatch({
        type: 'setRequestEndpoint',
        payload: val,
      });
    },
    currentEnv: 'currentEnvironment',
    theme: 'light',
  });

  return (
    <SmartEnvInputWrapper className={'smart-env'}>
      <div ref={smartEnvInputRef} />
    </SmartEnvInputWrapper>
  );
};

export default SmartEnvInput;
