-- Create nanoid function
CREATE OR REPLACE FUNCTION "public"."nanoid"("size" integer DEFAULT 21, "alphabet" "text" DEFAULT '_-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'::"text", "additionalbytesfactor" double precision DEFAULT 1.6) RETURNS "text"
    LANGUAGE "plpgsql"
    AS $$
DECLARE
  id text := '';
  i integer := 0;
  bytes bytea;
  alphabet_index integer;
  mask integer;
  step integer;
BEGIN
  mask := (2 << cast(floor(log(length(alphabet) - 1) / log(2)) as integer)) - 1;
  step := cast(ceil(1.6 * mask * size / length(alphabet)) AS integer);

  while true loop
    bytes := gen_random_bytes(step);
    while i < step loop
      alphabet_index := (get_byte(bytes, i) & mask) + 1;
      if alphabet_index <= length(alphabet) then
        id := id || substr(alphabet, alphabet_index, 1);
        if length(id) = size then
          return id;
        end if;
      end if;
      i := i + 1;
    end loop;
    i := 0;
  end loop;
END;
$$;

-- Create generate_inbox function
CREATE OR REPLACE FUNCTION "public"."generate_inbox"("size" integer) RETURNS "text"
    LANGUAGE "plpgsql"
    AS $$
BEGIN
  RETURN nanoid(size);
END;
$$;

-- Grant permissions
GRANT ALL ON FUNCTION "public"."nanoid"("size" integer, "alphabet" "text", "additionalbytesfactor" double precision) TO "anon";
GRANT ALL ON FUNCTION "public"."nanoid"("size" integer, "alphabet" "text", "additionalbytesfactor" double precision) TO "authenticated";
GRANT ALL ON FUNCTION "public"."nanoid"("size" integer, "alphabet" "text", "additionalbytesfactor" double precision) TO "service_role";

GRANT ALL ON FUNCTION "public"."generate_inbox"("size" integer) TO "anon";
GRANT ALL ON FUNCTION "public"."generate_inbox"("size" integer) TO "authenticated";
GRANT ALL ON FUNCTION "public"."generate_inbox"("size" integer) TO "service_role"; 