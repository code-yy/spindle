import React, { useEffect, useRef, useState } from 'react';
import dialogPolyfill from 'dialog-polyfill';
import { Button } from '../Button';
import { SemiModal } from './SemiModal';

import 'dialog-polyfill/dist/dialog-polyfill.css';

type Size = 'large' | 'medium' | 'small';
type Type = 'sheet' | 'popup';

function useDialogpolyfill(ref: React.RefObject<HTMLDialogElement>) {
  useEffect(() => {
    if (ref.current) {
      dialogPolyfill.registerDialog(ref.current);
    }
  }, [ref]);
}
export function PopupModalExample() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOpenButtonClick = () => setOpen(true);

  const handleDialogCancel = () => setOpen(false);

  const handleDialogClose = () => setOpen(false);

  useDialogpolyfill(dialogRef);

  return (
    <>
      <Button aria-haspopup="true" onClick={handleOpenButtonClick}>
        モーダルを開く
      </Button>
      <SemiModal.Frame
        aria-describedby="dialog-description"
        aria-labelledby="dialog-title"
        ref={dialogRef}
        open={open}
        onCancel={handleDialogCancel}
        onClose={handleDialogClose}
      >
        <SemiModal.Header id="dialog-title">
          <SemiModal.Title>About Ameba</SemiModal.Title>
        </SemiModal.Header>
        <SemiModal.Contents id="dialog-description">
          AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
        </SemiModal.Contents>
        <SemiModal.Footer>
          <Button layout="fullWidth">確認する</Button>
        </SemiModal.Footer>
      </SemiModal.Frame>
    </>
  );
}

export function SheetModalExample() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOpenButtonClick = () => setOpen(true);

  const handleDialogClose = () => setOpen(false);

  useDialogpolyfill(dialogRef);

  return (
    <>
      <Button aria-haspopup="true" onClick={handleOpenButtonClick}>
        モーダルを開く
      </Button>
      <SemiModal.Frame
        aria-describedby="dialog-description"
        aria-labelledby="dialog-title"
        ref={dialogRef}
        open={open}
        type="sheet"
        onClose={handleDialogClose}
      >
        <SemiModal.Header id="dialog-title">
          <SemiModal.Title>About Ameba</SemiModal.Title>
        </SemiModal.Header>
        <SemiModal.Contents id="dialog-description">
          AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
        </SemiModal.Contents>
        <SemiModal.Footer>
          <Button layout="fullWidth">確認する</Button>
        </SemiModal.Footer>
      </SemiModal.Frame>
    </>
  );
}

export function StyleOnlyPopupLarge() {
  return (
    <SemiModal.StyleOnly
      aria-describedby="styleOnlyLarge-description"
      aria-labelledby="styleOnlyLarge-title"
      style={{ position: 'relative' }}
    >
      <SemiModal.Header id="dialog-title">
        <SemiModal.Title>About Ameba</SemiModal.Title>
      </SemiModal.Header>
      <SemiModal.Contents id="styleOnlyLarge-description">
        AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
      </SemiModal.Contents>
    </SemiModal.StyleOnly>
  );
}

export function StyleOnlyPopupMedium() {
  return (
    <SemiModal.StyleOnly
      aria-describedby="styleOnlyMedium-description"
      aria-labelledby="styleOnlyMedium-title"
      size="medium"
      style={{ position: 'relative' }}
    >
      <SemiModal.Header id="dialog-title">
        <SemiModal.Title>About Ameba</SemiModal.Title>
      </SemiModal.Header>
      <SemiModal.Contents id="styleOnlyMedium-description">
        AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
      </SemiModal.Contents>
    </SemiModal.StyleOnly>
  );
}

export function StyleOnlyPopupSmall() {
  return (
    <SemiModal.StyleOnly
      aria-describedby="styleOnlySmall-description"
      aria-labelledby="styleOnlySmall-title"
      size="small"
      style={{ position: 'relative' }}
    >
      <SemiModal.Header id="dialog-title">
        <SemiModal.Title>About Ameba</SemiModal.Title>
      </SemiModal.Header>
      <SemiModal.Contents id="styleOnlySmall-description">
        AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
      </SemiModal.Contents>
    </SemiModal.StyleOnly>
  );
}

export function StyleOnlySheetLarge() {
  return (
    <SemiModal.StyleOnly
      aria-describedby="styleOnlyLarge-description"
      aria-labelledby="styleOnlyLarge-title"
      type="sheet"
      style={{ position: 'relative', transform: 'translateY(0)', margin: 0 }}
    >
      <SemiModal.Header id="dialog-title">
        <SemiModal.Title>About Ameba</SemiModal.Title>
      </SemiModal.Header>
      <SemiModal.Contents id="styleOnlyLarge-description">
        AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
      </SemiModal.Contents>
    </SemiModal.StyleOnly>
  );
}

export function StyleOnlySheetMedium() {
  return (
    <SemiModal.StyleOnly
      aria-describedby="styleOnlyMedium-description"
      aria-labelledby="styleOnlyMedium-title"
      size="medium"
      type="sheet"
      style={{ position: 'relative', transform: 'translateY(0)', margin: 0 }}
    >
      <SemiModal.Header id="dialog-title">
        <SemiModal.Title>About Ameba</SemiModal.Title>
      </SemiModal.Header>
      <SemiModal.Contents id="styleOnlyMedium-description">
        AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
      </SemiModal.Contents>
    </SemiModal.StyleOnly>
  );
}

export function StyleOnlySheetSmall() {
  return (
    <SemiModal.StyleOnly
      aria-describedby="styleOnlySmall-description"
      aria-labelledby="styleOnlySmall-title"
      size="small"
      type="sheet"
      style={{ position: 'relative', transform: 'translateY(0)', margin: 0 }}
    >
      <SemiModal.Header id="dialog-title">
        <SemiModal.Title>About Ameba</SemiModal.Title>
      </SemiModal.Header>
      <SemiModal.Contents id="styleOnlySmall-description">
        AmebaはAmebaブログをはじめ、最新の芸能人ニュースやマンガ・占いなど生きたコンテンツが集結した月間7,500万人が利用する国民的メディアサービスです。
      </SemiModal.Contents>
    </SemiModal.StyleOnly>
  );
}
