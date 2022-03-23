import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import classes from "../styles/Home.module.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Link from "next/link";
export default function Home() {
  const handleMailClick = () => {};
  return (
    <div>
      <Layout title="Home">
        <Grid container className={classes.main}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              align="center"
              fontWeight={700}
              p={4}
              sx={{ color: "white" }}
            >
              Welcome To Department Of Engineering And Technological Studies
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.img}>
            <Image
              src={
                "https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/detslogo1.jpg"
              }
              atl="logo-1"
              width={300}
              height={300}
              priority
            />
          </Grid>
          <Grid item xs={12} className={classes.text}>
            <Typography sx={{ color: "white" }} px={8} py={2}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.quickLinks}>
            <Button variant="outlined" color="secondary">
              <Link href="/notice">Notice</Link>
            </Button>
            <Button variant="outlined" color="secondary">
              <Link href="/feedback">FeedBack</Link>
            </Button>
            <Button variant="outlined" color="secondary">
              <Link href="/alumni">Our alumni</Link>
            </Button>
            <Button variant="outlined" color="secondary">
              <Link href="/events">Events</Link>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ color: "white" }} align="center" variant="h4">
              Head Of Department
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.hodImageContainer}>
            <Image
              src={
                "https://raw.githubusercontent.com/A-jha/DETS-DB/master/img/REX_6078-min.jpg"
              }
              width={500}
              height={400}
              className={classes.hodImage}
            />
          </Grid>
          <Grid item xs={12} className={classes.hodInfo}>
            <Typography variant="h6">Prof. Srinka Basu</Typography>
            <Typography>
              Follow 3 P in Your Life, first Positivity, Second Polite Attitude,
              Third Punctuality
            </Typography>
            <Button
              variant="outlined"
              color="success"
              className={classes.hodEmailButton}
            >
              <Link href={"mailto:avvinashjha@gmail.com"}>Email</Link>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" color="white"></Typography>
          </Grid>
          <Grid item className={classes.cards} m={2}>
            <Card sx={{ width: "300px", height: "300px", margin: "8px" }}>
              <Typography>Hello</Typography>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}
