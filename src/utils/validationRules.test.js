// import { isPhoneNumberText } from "./utils"

import { isAlphanumericText, isPhoneNumberText, isSafeText } from '.'

describe('validation rules utils', () => {
  describe('isPhoneNumberText validation', () => {
    it('validates correct phone numbers', () => {
      expect(isPhoneNumberText('(123) 456-7890')).toBe(true)
      expect(isPhoneNumberText('+(123) 456-7890')).toBe(true)
      expect(isPhoneNumberText('+(123)-456-7890')).toBe(true)
      expect(isPhoneNumberText('+(123) - 456-7890')).toBe(true)
      expect(isPhoneNumberText('+(123) - 456-78-90')).toBe(true)
      expect(isPhoneNumberText('123-456-7890')).toBe(true)
      expect(isPhoneNumberText('123.456.7890')).toBe(true)
      expect(isPhoneNumberText('1234567890')).toBe(true)
      expect(isPhoneNumberText('+31636363634')).toBe(true)
      expect(isPhoneNumberText('075-63546725')).toBe(true)
      expect(isPhoneNumberText('(234) 567-8901 ext. 123')).toBe(true)
      expect(isPhoneNumberText('+1 234-567-8901 ext. 123')).toBe(true)
      expect(isPhoneNumberText('+1 234-567-8901 ;123')).toBe(true)
      expect(isPhoneNumberText('011 61 2 9999 9999')).toBe(true)
      expect(isPhoneNumberText('+51 99999999')).toBe(true)
    })
    it('rejects incorrect phone numbers', () => {
      expect(isPhoneNumberText('(123) 456-7890% number')).toBe(false)
      expect(isPhoneNumberText('456-7890% <></>')).toBe(false)
      expect(isPhoneNumberText('string +51 9999')).toBe(false)
      expect(isPhoneNumberText('$%^&123')).toBe(false)
      expect(isPhoneNumberText('<script>alert("test")</script>')).toBe(false)
      expect(isPhoneNumberText('String for testing')).toBe(false)
    })
  })

  describe('isSafeText validation', () => {
    it('validates safe text', () => {
      expect(isSafeText('(123) 456-7890')).toBe(true)
      expect(isSafeText('Some text here')).toBe(true)
      expect(isSafeText('75>24')).toBe(true)
      expect(isSafeText('big > small')).toBe(true)
      expect(isSafeText('small < big ')).toBe(true)
    })
    it('rejects unsafe text', () => {
      expect(isSafeText('Hi, <script>alert("attack")<script>')).toBe(false)
      expect(isSafeText('Hi, <p>Pete</p>')).toBe(false)
      expect(isSafeText('<img><img>')).toBe(false)
      expect(isSafeText('<b onmouseover=alert("Wufff!")>click me!</b>')).toBe(
        false
      )
      expect(isSafeText('<IMG SRC=j&#X41vascript:alert("test2")>')).toBe(false)
      expect(
        isSafeText(
          '<META HTTP-EQUIV="refresh"CONTENT="0;url=data:text/html;base64,PHNjcmlwdD5hbGVydCgndGVzdDMnKTwvc2NyaXB0Pg">'
        )
      ).toBe(false)
      expect(
        isSafeText(
          '<script>function verbose () { alert("Hello World!"); }</script><input type="button" value="Test" onclick="verbose()"/>'
        )
      ).toBe(false)
    })
  })

  describe('isAlphanumericText validation', () => {
    it('validates alphanumeric text', () => {
      expect(isAlphanumericText('This is english text')).toBe(true) // english
      expect(isAlphanumericText('This is english text 123')).toBe(true) // english with numbers
      expect(isAlphanumericText('Λορεμ ιπσθμ δολορ σιτ αμετ')).toBe(true) // greek
      expect(isAlphanumericText('Λορεμ ιπσθμ δολορ σιτ αμετ 456')).toBe(true) // greek with numbers
      expect(isAlphanumericText('У меня большая семья из шести человек')).toBe(
        true
      ) // russian
      expect(
        isAlphanumericText('У меня большая семья из шести человек 789')
      ).toBe(true) // russian with numbers
      expect(
        isAlphanumericText(
          'suǒyǒu kuàilè bēishāng suǒyǒu guòqù tōngtōng dōu pāo qù'
        )
      ).toBe(true) // pinyin (chinese)
      expect(
        isAlphanumericText(
          'suǒyǒu kuàilè bēishāng suǒyǒu guòqù tōngtōng dōu pāo qù 360'
        )
      ).toBe(true) // pinyin (chinese) with numbers
    })
    it('validates alphanumeric text', () => {
      expect(isAlphanumericText('This is inv$l^d t#xt')).toBe(false) // invalid english
      expect(isAlphanumericText('Λορεμ ιπσθμ δολορ σιτ αμετ #')).toBe(false) // invalid greek
      expect(
        isAlphanumericText('У меня большая семья из шести человек %')
      ).toBe(false) // invalid russian
      expect(
        isAlphanumericText(
          'suǒyǒu  %% kuàilè $$ bēishāng suǒyǒu ** guòqù tōngtōng dōu pāo qù 360'
        )
      ).toBe(false) // invalid pinyin (chinese)
    })
  })
})
