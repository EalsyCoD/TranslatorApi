import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Select from "src/components/Select/Select";
import Button from "src/components/Button/Button";
import { SkeletonLoader } from "src/components";

import {
  setLanguageFilterFrom,
  setLanguageFilterTo,
  swapLangauges,
} from "src/store/actions/LanguageAction";
import { setFavorites } from "src/store/actions/FavoritesAction";
import { setNotification } from "src/store/actions/NotificationAction";
import { setTranslate } from "src/store/actions/TranslateAction";
import { setDetected } from "src/store/actions/DetectedAction";
import { setTranslateDefault } from "src/store/actions/TranslateDefaultAction";
import { Translate } from "src/store/types";

import { RootState } from "src/store/reducers";

import favorites from "../../assets/icon/icon-star.svg";

import {
  Container,
  TextArea,
  ContainerTextArea,
  SkeletonContainer,
  StarContainer,
  Image,
  BlockButton,
} from "./styles";

export const TranslateArea = () => {
  const dispatch = useDispatch();
  let intervalRef = React.useRef<NodeJS.Timeout>();

  const { languageFrom, languageTo } = useSelector(
    (state: RootState) => state.language
  );

  const translateWord = useSelector(
    (state: RootState) => state.translateDefault
  );
  const translateWordDefault = useSelector(
    (state: RootState) => state.translate
  );

  const detectedWord = useSelector((state: RootState) => state.detected);

  const [textAreaFrom, setTextAreaFrom] = React.useState<string>("");
  const [textAreaTo, setTextAreaTo] = React.useState<string>(
    translateWord[0].translations[0].text
  );

  const TextTranlated: Translate = [
    {
      Text: textAreaFrom,
    },
  ];

  const send = {
    favorites: [
      {
        from: textAreaFrom,
        to: translateWord[0].translations[0].text,
      },
    ],
  };
  const handleSwap = () => {
    if (languageFrom && languageTo !== "" && languageFrom !== languageTo) {
      dispatch(swapLangauges());
    }
  };
  const handleTranslate = () => {
    if (languageFrom === "Auto Language Select") {
      dispatch(setTranslate(TextTranlated));
    } else {
      dispatch(setTranslateDefault(TextTranlated));
    }
  };

  const handleCheckKeyboard = () => {
    setTimeout(() => {
      if (
        languageFrom === detectedWord.map((item) => item.language).toString()
      ) {
      } else if (languageFrom === "Auto Language Select") {
      } else if (
        languageFrom !== detectedWord.map((item) => item.language).join()
      ) {
        dispatch(setNotification("Сhange keyboard layout", "error", 5));
      }
    }, 3000);
  };

  const HandleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguageFilterFrom(e.target.value));
  };

  return (
    <>
      <Container>
        <ContainerTextArea>
          <Select
            onChange={HandleSelect}
            value={languageFrom ? languageFrom : detectedWord[0].language}
            name="select"
            optionsValue="Auto Language Select"
            chilldrenOptions={"Auto Language Select"}
          />
          <StarContainer>
            <TextArea
              id="from"
              value={textAreaFrom}
              onChange={(e) => {
                setTextAreaFrom(e.target.value);
                clearTimeout(intervalRef.current);
                intervalRef.current = setTimeout(() => {
                  handleTranslate();
                  dispatch(setDetected(TextTranlated));
                  handleCheckKeyboard();
                }, 1000);
              }}
            ></TextArea>
            <Image
              onClick={() => dispatch(setFavorites(send))}
              src={favorites}
              alt="favorites"
            />
          </StarContainer>
        </ContainerTextArea>
        <ContainerTextArea>
          <Select
            onChange={(e) => dispatch(setLanguageFilterTo(e.target.value))}
            value={languageTo}
            name="select"
            optionsValue="Auto Language Select"
            chilldrenOptions={"Auto Language Select"}
          />
          <SkeletonContainer>
            <TextArea
              disabled={true}
              value={
                translateWord[0].translations[0].text
                  ? translateWord[0].translations[0].text
                  : translateWordDefault[0].translations[0].text
              }
            ></TextArea>
            <SkeletonLoader />
          </SkeletonContainer>
          <Button textButton="Switch" type="submit" onClick={handleSwap} />
          <BlockButton>
            <Link to="/favorites">
              <Button textButton="Go to Favorites" />
            </Link>
          </BlockButton>
        </ContainerTextArea>
      </Container>
    </>
  );
};
