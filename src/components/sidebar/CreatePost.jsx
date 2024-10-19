import React from "react";
import vector2 from "../imgs/Vector2.png";
import telImg from "../imgs/telImg.svg";
import {
  ButtonsPages,
  PageButton,
  Wrapper,
  Card,
  CardWrappers,
  ButtonVideo,
  ImgVideo,
  CardText,
  ImgTop,
  Form,
  ProductInputName,
  ProductInputBrand,
  ForumPrace,
  ProductPrace,
  ProductSale,
  ForumText,
  ForumSelect,
  SelectCategory,
  NextButton,
  ButtonImg,
} from "./CreatePost";

const CreatePost = () => {
  return (
    <Wrapper>
      <ButtonsPages>
        <PageButton type="submit">
          <ButtonImg src={vector2} />
          Add post
        </PageButton>
        <PageButton type="submit">
          <ButtonImg src={vector2} />
          Add post
        </PageButton>
        <PageButton type="submit">
          <ButtonImg src={vector2} />
          Add post
        </PageButton>
        <PageButton type="submit">
          <ButtonImg src={vector2} />
          Add post
        </PageButton>
        <PageButton type="submit">
          <ButtonImg src={vector2} />
          Add post
        </PageButton>
        <PageButton type="submit">
          <ButtonImg src={vector2} />
          Add post
        </PageButton>
      </ButtonsPages>
      <Card>
        <CardWrappers>
          <ImgTop src={telImg} />
          <CardText>Choose your photo or video here</CardText>
          <ButtonVideo>
            <ImgVideo src={telImg} /> Select from computer
          </ButtonVideo>
        </CardWrappers>
      </Card>
      <Form>
        <ProductInputName type={"text"} placeholder="Product Name" />
        <ProductInputBrand type={"text"} placeholder="Product Brand" />
        <ForumPrace>
          <ProductPrace type="text" placeholder="Product Price" />
          <ProductSale type="text" placeholder="Is In Sale" />
        </ForumPrace>
        <ForumText type="text" placeholder="Write Product Description..." />
        <ForumSelect>
          <SelectCategory>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </SelectCategory>
          <SelectCategory>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </SelectCategory>
        </ForumSelect>
        <NextButton type="submit">
          <ButtonImg src={vector2} />
          Add post
        </NextButton>
      </Form>
    </Wrapper>
  );
};

export default CreatePost;
