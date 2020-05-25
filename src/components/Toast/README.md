## How to use AlertQueue ?

- First of all, import the AlertQueue file :  
  `import AlertQueue from '../components/Toast'`
- Then use the AlertQueue component whenever you want :  
  `<AlertQueue/>`  
  In this component, you can change few things :
  - Which side you want the toast list appear with `position="top"`or `position="bottom"`.  
    _By default it'll be at the bottom side_
  - If you want to show or hide the shine effect, this effect shows the life time of the toast add `shine="true"`or `shine="false"`  
    _By default the shine effect is `true`_
- Ex : `<AlertQueue position="top" shine="false"/>`

In the AlertQueue file, you have few functions to launch different type of toast :

- addWarningAlert
- addErrorAlert
- addSuccesAlert
- addInfoAlert

**NB :** you can change the text of each of these alert directly in the `AlertQueue.js` file, in the `const alerts` object

To call these functions in your main file, in **React** you have to :</br>

- `import { useRef } from 'react'` in the top of your file</br>
- `const constName = useRef()` create a const equal to the useRef</br>
- In the return, you have to call the ref in the AlertQueue component :</br> `<AlertQueue ref={constName} />`</br>
- For example, in a button, you have to call the function you want (here the `addErrorAlert()`) with the const you created.current before</br>
  `<button onClick={() => constName.current.addErrorAlert()} >`

## Modify style

If you want to change the container style, in `AlertQueue.sccs` you have :

- containerRightPosition

If you want to change the style of these toast, go to the `Toast.scss` file, you have few parameters available like :

- toastWidth
- toastVerticalPosition
- toastPositionRight
- toastColorError
- toastColorWarning
- toastColorSuccess
- toastColorInfo
- toastFontColor
- toastBorderRadius
- toastPadding
- toastDuration
- toastFadeInDuration
- toastFadeOutDuration
