# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_kvcoding_session',
  :secret      => 'eb62399f244a74a2ab6b2052d35a106e66bf0a13b7fd9e96e909ba17d6e31715b0522414b2963a64c55b4fb27bd429ff1a31cd64d3c5e1e12c30b645691fc2fc'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
