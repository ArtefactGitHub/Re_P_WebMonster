require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'

CarrierWave.configure do |config|
  if Rails.env.production?
    config.storage :fog
    config.fog_provider = 'fog/aws'
    config.fog_directory  = ENV['AWS_S3_BUCKET_NAME']
    # キャッシュの保存期間
    config.fog_attributes = { 'Cache-Control': "max-age=#{365.day.to_i}" }
    # リンク直アクセスを弾く（認証情報が必要になるとか）
    config.fog_public = false
    # キャッシュもS3に置くようにする
    config.cache_storage = :fog
    config.cache_dir = 'tmp/image-cache'
    
    config.fog_credentials = {
      provider: 'AWS',
      aws_access_key_id: ENV['AWS_ACCESS_KEY_ID'],
      aws_secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
      region: ENV['AWS_REGION']
    }
  else
    config.storage :file
    config.enable_processing = false if Rails.env.test?
  end
end

CarrierWave::SanitizedFile.sanitize_regexp = /[^[:word:]\.\-\+]/
