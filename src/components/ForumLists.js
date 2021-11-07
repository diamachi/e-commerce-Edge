import React from "react";
import cx from "clsx";
import NoSsr from "@material-ui/core/NoSsr";
import GoogleFontLoader from "react-google-font-loader";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
// import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { Column, Row, Item } from "@mui-treasury/components/flex";
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic";
import { Link } from "react-router-dom";
import Discussion from "./Discussion";

const usePersonStyles = makeStyles(() => ({
  text: {
    fontFamily: "Barlow, san-serif",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  name: {
    fontWeight: 600,
    fontSize: "1rem",
    color: "#122740",
  },
  caption: {
    fontSize: "0.875rem",
    color: "#758392",
    marginTop: -4,
  },
  btn: {
    borderRadius: 20,
    padding: "0.125rem 0.75rem",
    borderColor: "#becddc",
    fontSize: "0.75rem",
  },
}));

const PersonItem = ({ src, name, friendCount }) => {
  const avatarStyles = useDynamicAvatarStyles({ size: 56 });
  const styles = usePersonStyles();
  return (
    <Row gap={2} p={2.5}>
      <Item>
        <Avatar classes={avatarStyles} src={src} />
      </Item>
      <Row wrap grow gap={0.5} minWidth={0}>
        <Item grow minWidth={0}>
          <div className={cx(styles.name, styles.text)}>{name}</div>
          <div className={cx(styles.caption, styles.text)}>
            {friendCount} Total Discussions
          </div>
        </Item>
        <Item position={"middle"}>
          <Button
            className={styles.btn}
            variant={"outlined"}
            component={Link}
            to={"/Discussion"}
          >
            Join
          </Button>
        </Item>
      </Row>
    </Row>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    width: "100%",
    borderRadius: 16,
    boxShadow: "0 8px 16px 0 #BDC9D7",
    overflow: "hidden",
  },
  header: {
    fontFamily: "Barlow, san-serif",
    backgroundColor: "#fff",
  },
  headline: {
    color: "#122740",
    fontSize: "1.25rem",
    fontWeight: 600,
  },
  link: {
    color: "#2281bb",
    padding: "0 0.25rem",
    fontSize: "0.875rem",
  },
  actions: {
    color: "#BDC9D7",
  },
  divider: {
    backgroundColor: "#d9e2ee",
    margin: "0 20px",
  },
}));

export const ForumLists = React.memo(function SocialCard(props) {
  const styles = useStyles();
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: "Barlow", weights: [400, 600] }]} />
      </NoSsr>
      <Column p={0} gap={0} className={styles.card}>
        <Row wrap p={2} alignItems={"baseline"} className={styles.header}>
          <Item stretched className={styles.headline}>
            Current Trending Discussions
          </Item>
          <Item className={styles.actions}>
            <Link className={styles.link}>Refresh</Link> •{" "}
            <Link className={styles.link}>See all</Link>
          </Item>
        </Row>
        <PersonItem
          name={
            "PUMA x FIRST MILE Women Cream Coloured Provoke XT Utility Training Shoes"
          }
          friendCount={45}
          src={
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14850006/2021/9/6/61f69b64-4cbd-482f-8cd8-e9cdbcd12ba71630929882512-PUMA-x-FIRST-MILE-Women-Cream-Coloured-Provoke-XT-Utility-Tr-1.jpg"
          }
        />
        <Divider variant={"middle"} className={styles.divider} />
        <PersonItem
          name={
            "Arrow-Men Black & Grey Checked Body Tailored Fit Formal Blazer"
          }
          friendCount={31}
          src={
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15045574/2021/9/15/4f7dc4d3-52bf-4245-a33c-26010550875d1631709146451-Arrow-Men-Blazers-8271631709145788-1.jpg"
          }
        />
        <Divider variant={"middle"} className={styles.divider} />
        <PersonItem
          name={
            "Tommy Hilfiger-Men White & Silver-Toned Analogue Watch TH1791349J"
          }
          friendCount={18}
          src={
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1874533/2017/5/10/11494412215717-Tommy-Hilfiger-Men-White--Silver-Toned-Analogue-Watch-3051494412215535-1.jpg"
          }
        />
        <Divider variant={"middle"} className={styles.divider} />
        <PersonItem
          name={
            "TVaranga-Women Multi-Coloured Phulkari Printed Tiered Flared Maxi Pure Cotton SkirtJ"
          }
          friendCount={12}
          src={
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12124084/2020/8/5/90db5e45-3f13-4341-b45e-cc5d507fb1cc1596606920794-varanga-multi-color-phulkari-printed-tiered-long-skirt-with--1.jpg"
          }
        />
        <Divider variant={"middle"} className={styles.divider} />
        <PersonItem
          name={"H&M-Women White & Black Acrylic Jumper"}
          friendCount={12}
          src={
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15809062/2021/10/13/4f6d1445-f481-4d06-b0b9-6d6de7da9d261634063934609Jumper1.jpg"
          }
        />
        <Divider variant={"middle"} className={styles.divider} />
        <PersonItem
          name={"GRACIT-Women Pack Of 2 Solid Salwars"}
          friendCount={9}
          src={
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/6/1/f2081635-d13a-46fa-8948-6cc650d6472c1622534149771-1.jpg"
          }
        />
      </Column>
    </>
  );
});
