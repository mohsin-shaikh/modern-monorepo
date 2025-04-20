import { getEmailUrl } from "@pkg/utils/envs";
import {
  Column,
  Hr,
  Img,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { TripleColumn } from "responsive-react-email";

const baseUrl = getEmailUrl();

export function Footer() {
  return (
    <Section className="w-full">
      <Hr />

      <br />

      <Text className="text-[21px] font-regular">
        Run your business smarter.
      </Text>

      <br />

      <TripleColumn
        pX={0}
        pY={0}
        styles={{ textAlign: "left" }}
        columnOneContent={
          <Section className="text-left p-0 m-0">
            <Row>
              <Text className="font-medium">Features</Text>
            </Row>

            <Row className="mb-1.5">
              <Link
                className="text-[#707070] text-[14px]"
                href="https://go.zuupee.com/bOp4NOx"
              >
                Overview
              </Link>
            </Row>
            <Row className="mb-1.5">
              <Link
                className="text-[#707070] text-[14px]"
                href="https://go.zuupee.com/VFcNsmQ"
              >
                Inbox
              </Link>
            </Row>
            <Row className="mb-1.5">
              <Link
                className="text-[#707070] text-[14px]"
                href="https://go.zuupee.com/uA06kWO"
              >
                Vault
              </Link>
            </Row>
            <Row className="mb-1.5">
              <Link
                className="text-[#707070] text-[14px]"
                href="https://go.zuupee.com/x7Fow9L"
              >
                Tracker
              </Link>
            </Row>

            <Row className="mb-1.5">
              <Link
                className="text-[#707070] text-[14px]"
                href="https://go.zuupee.com/fkYXc95"
              >
                Invoice
              </Link>
            </Row>

            <Row className="mb-1.5">
              <Link
                className="text-[#707070] text-[14px]"
                href="https://go.zuupee.com/dEnP9h5"
              >
                Pricing
              </Link>
            </Row>

            <Row className="mb-1.5">
              <Link
                className="text-[#707070] text-[14px]"
                href="https://go.zuupee.com/E24P3oY"
              >
                Engine
              </Link>
            </Row>

            <Row className="mb-1.5">
              <Link
                className="text-[#707070] text-[14px]"
                href="https://zuupee.com/download"
              >
                Download
              </Link>
            </Row>
          </Section>
        }
        columnOneStyles={{ paddingRight: 0, paddingLeft: 0, width: 185 }}
        columnTwoContent={
          <Section className="text-left p-0 m-0">
            <Row>
              <Text className="font-medium">Resources</Text>
            </Row>
            <Row className="mb-1.5">
              <Link
                className="text-[#707070] text-[14px]"
                href="https://go.zuupee.com/fhEy5CL"
              >
                Homepage
              </Link>
            </Row>
            <Row className="mb-1.5">
              <Link
                className="text-[#707070] text-[14px]"
                href="https://git.new/zuupee"
              >
                Github
              </Link>
            </Row>
            <Row className="mb-1.5">
              <Link
                className="text-[#707070] text-[14px]"
                href="https://go.zuupee.com/ZrhEMbR"
              >
                Support
              </Link>
            </Row>
            <Row className="mb-1.5">
              <Link
                className="text-[#707070] text-[14px]"
                href="https://go.zuupee.com/rofdWKi"
              >
                Terms of service
              </Link>
            </Row>
            <Row className="mb-1.5">
              <Link
                className="text-[#707070] text-[14px]"
                href="https://go.zuupee.com/TJIL5mQ"
              >
                Privacy policy
              </Link>
            </Row>

            <Row className="mb-1.5">
              <Link
                className="text-[#707070] text-[14px]"
                href="https://go.zuupee.com/IQ1kcN0"
              >
                Branding
              </Link>
            </Row>

            <Row className="mb-1.5">
              <Link
                className="text-[#707070] text-[14px]"
                href="https://go.zuupee.com/x5ohOs7"
              >
                Feature Request
              </Link>
            </Row>
          </Section>
        }
        columnTwoStyles={{ paddingRight: 0, paddingLeft: 0, width: 185 }}
        columnThreeContent={
          <Section className="text-left p-0 m-0">
            <Row>
              <Text className="font-medium">Company</Text>
            </Row>
            <Row className="mb-1.5">
              <Link
                className="text-[#707070] text-[14px]"
                href="https://go.zuupee.com/186swoH"
              >
                Story
              </Link>
            </Row>
            <Row className="mb-1.5">
              <Link
                className="text-[#707070] text-[14px]"
                href="https://go.zuupee.com/QWyX8Um"
              >
                Updates
              </Link>
            </Row>
            <Row className="mb-1.5">
              <Link
                className="text-[#707070] text-[14px]"
                href="https://go.zuupee.com/Dd7M8cl"
              >
                Open startup
              </Link>
            </Row>
            <Row className="mb-1.5">
              <Link
                className="text-[#707070] text-[14px]"
                href="https://go.zuupee.com/M2Hv420"
              >
                OSS Friends
              </Link>
            </Row>
          </Section>
        }
        columnThreeStyles={{ paddingRight: 0, paddingLeft: 0, width: 185 }}
      />

      <br />
      <br />

      <Row>
        <Column className="align-middle w-[40px]">
          <Link href="https://go.zuupee.com/lS72Toq">
            <Img
              src={`${baseUrl}/email/x.png`}
              width="22"
              height="22"
              alt="ZUUPEE on X"
            />
          </Link>
        </Column>
        <Column className="align-middle w-[40px]">
          <Link href="https://go.zuupee.com/7rhA3rz">
            <Img
              src={`${baseUrl}/email/producthunt.png`}
              width="22"
              height="22"
              alt="ZUUPEE on Producthunt"
            />
          </Link>
        </Column>

        <Column className="align-middle w-[40px]">
          <Link href="https://go.zuupee.com/anPiuRx">
            <Img
              src={`${baseUrl}/email/discord.png`}
              width="22"
              height="22"
              alt="ZUUPEE on Discord"
            />
          </Link>
        </Column>

        <Column className="align-middle">
          <Link href="https://go.zuupee.com/Ct3xybK">
            <Img
              src={`${baseUrl}/email/linkedin.png`}
              width="22"
              height="22"
              alt="ZUUPEE on LinkedIn"
            />
          </Link>
        </Column>
      </Row>

      <br />
      <br />

      <Row>
        <Text className="text-[#B8B8B8] text-xs">
          ZUUPEE Labs AB - Torsgatan 59 113 37, Stockholm, Sweden.
        </Text>
      </Row>

      <Row>
        <Link
          className="text-[#707070] text-[14px]"
          href="https://app.zuupee.com/settings/notifications"
          title="Unsubscribe"
        >
          Notification preferences
        </Link>
      </Row>

      <br />
      <br />

      <Row>
        <Link href="https://go.zuupee.com/FZwOHud">
          <Img
            src={`${baseUrl}/email/logo-footer.png`}
            width="100"
            alt="ZUUPEE"
            className="block"
          />
        </Link>
      </Row>
    </Section>
  );
}
