# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_grabmycard_session',
  :secret      => '7ee24920afb472cb3b6f0e1b351f7404585c65dc08db1185b4ae6a6e7b7d6101173e6a3a6b8756a1129a2423007c3afcacec636f61f68a6ad65d4c65c24e609c'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
